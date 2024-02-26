//any request sent will be handeled by this file

import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth/next";

export default NextAuth(authOptions)