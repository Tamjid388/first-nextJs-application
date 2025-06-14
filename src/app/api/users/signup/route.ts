import { connect } from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

// connect with database
connect()


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { username, email, password } = reqBody
        console.log(reqBody);
        const user = await User.findOne({ email })
        if (user) {
            return NextResponse.json({
                error: "User Already Exists"
            })
        }
        //Hash Password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })
        const savedUser = await newUser.save()
        console.log(savedUser);

        return NextResponse.json({
            massage: "user creation successfull",
            success: true,
            savedUser
        },
            { status: 200 })

    } catch (error: any) {
        console.log(error);
    }

}