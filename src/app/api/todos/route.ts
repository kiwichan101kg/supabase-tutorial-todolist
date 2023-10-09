import { supabase } from "@/app/utils/supabase";
import { NextResponse } from "next/server";

// 全取得
export const GET = async (req: Request, res: NextResponse) => {
  try {
    const todos = await supabase.from("todo").select("*");

    return NextResponse.json(
      { message: "Success", data: todos.data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
