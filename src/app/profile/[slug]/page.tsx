export default function dynamicPorfile({params}:any){
return(
    <div className="flex ">
        <h1 
        className="text-2xl font-bold text-white  mx-auto  mt-18"
        >This One is a dynamic profile page 
        <span className="bg-yellow-400 rounded-2xl p-2 mx-4">
         {""}    { params.slug}
        </span>
        </h1>
    </div>
)
}