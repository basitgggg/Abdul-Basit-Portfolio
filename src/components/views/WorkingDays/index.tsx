import { workingDays } from "@/components/assets/Images";
import WorkingDaysCard from "@/components/viewComponents/WorkingDaysCard";
import Image from "next/image";
import { WorkingDaysArray } from "@/components/utils/WorkingDaysArray";

export default function WorkingDays() {
    return (
        <div className={`px-2 py-4 text-center w-full bg-[#F3F4F6] dark:bg-gradient-to-tr from-darkBackgroundBottom via-darkBackgroundTop to-darkBackgroundBottom`}>
            <h2 className="dark:text-[#D0D5DB] hover:after:w-15 text-heading text-3xl sm:text-4xl font-semibold underline">Working Days</h2>
            <div className="pt-10 flex flex-col-reverse sm:flex-row items-center justify-around">
                <div>
                    <WorkingDaysCard WorkingDaysArray={WorkingDaysArray} />
                </div>
                <div>
                    <Image width={450} height={300} src={workingDays} alt="Working Days" />
                </div>
            </div>

        </div>
    )


}