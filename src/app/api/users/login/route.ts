import { connect } from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import bcrypt from "bcryptjs";
import { error } from "console";

import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { email, password } = reqBody;
        const user = await User.findOne({ email })
        if (!user) {
            return NextResponse.json({ error: "User does not exists" }, { status: 400 })
        }

        //    Check password
        const validpassword = await bcrypt.compare(password, user.password)

        if (!validpassword) {
            return NextResponse.json({ error: "Invalid Password" }, { status: 400 })
        }
        // create token

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email

        }

        const token = await jwt.sign(tokenData, process.env.secret_token!,
            { expiresIn: "1d" }
        )
        const response = NextResponse.json({
            messege: "Login Successful",
            success: true,
        })
        response.cookies.set("token", token, {
            httpOnly: true
        })
        return response;


    } catch (error: any) {
        return NextResponse.json({ error: error.massage })
    }
}

