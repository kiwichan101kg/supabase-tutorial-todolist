import { supabase } from "@/app/utils/supabase";
import { NextResponse } from "next/server";

// id指定取得
export const GET = async (req: Request, res: NextResponse) => {
  try {
    const id: number = parseInt(req.url.split("/todos/")[1]);
    const todos = await supabase.from("todo").select("*").eq("id", id);

    return NextResponse.json(
      { message: "Success", data: todos.data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
