import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className='pb-24 pt-10 lg:grid lg:gid-cols-3 sm:pb-32 lg:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'>
          <div className='col-span-2 px-6 lg:px-o lg:pt-4'>
            <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
              <div className='absolute w-28 left-0 -top-20 hidden lg:block'>
                <img src="/public/snake-1.png" />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
