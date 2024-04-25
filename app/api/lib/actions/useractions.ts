"use server";

import prisma from "@/prisma";
import { getServerSession } from "next-auth";
import Razorpay from "razorpay";
import { authOptions } from "../auth";

export async function initiate(
  amount: number,
  to_username: string,
  name: string,
  message: string
) {
  const session = await getServerSession(authOptions);
  var instance = new Razorpay({
    key_id: process.env.KEY_ID || "",
    key_secret: process.env.KEY_SECRET,
  });
  let options = {
    amount: amount,
    currency: "INR",
  };
  let x = await instance.orders.create(options);
  // create a payment object which shows the pending payment in the database
  //   await prisma.payment.create({
  //     where: {
  //       amount: amount,
  //       to_User: to_username,
  //       name: name,
  //       message: message,
  //       orderId: x.id,
  //       userId: session?.user?.id,
  //     },
  //   });
  return x;
}
