import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-start h-screen gap-32 px-4 pb-4">
        <div className="py-32 text-center flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl font-black">Emil Warelius</h1>
          <h2 className="text-2xl">Software Engineer</h2>
          <Button variant={"outline"} size={"lg"} className="font-bold text-2xl px-12 py-6">
            Say hello
          </Button>
        </div>
        <div className="flex justify-center flex-col item-center gap-2">
          <h3 className="text-xl text-center">Working at</h3>
          <Image src="/static/consid.png" alt="Consid AB logotype" width={150} height={100} />
        </div>
      </section>
      <section className="flex flex-col items-center justify-start h-screen gap-32 p-4 bg-primary-foreground text-background">
        <div className="text-center mt-10">
          <h2 className="text-5xl font-black">Projects</h2>
          <p className="text-2xl">This is currently being worked on</p>
        </div>
      </section>
    </>
  );
}
