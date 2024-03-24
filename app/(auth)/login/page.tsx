import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Login() {
    return (
        <div className={"mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14"}>
            <form>
                <h1 className={"text-3xl font-semibold text-white"}>Login</h1>
                <div className={"space-y-4 mt-5"}>
                    <Input type={"email"} name={"email"} placeholder={"Email"}
                           className={"bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"}/>
                    <Button type={"submit"} variant={"destructive"} className={"w-full bg-[#e50914]"}>Login</Button>
                </div>
            </form>

            <div className={"text-gray-500 text-sm mt-2"}>
                New to Netflix?{" "}
                <Link href={"/sign-up"} className={"text-[#e50914]"}>Sign Up</Link>
            </div>
        </div>
    )
}