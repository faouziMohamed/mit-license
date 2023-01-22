import { Inconsolata } from "@next/font/google";
import { useSearchParams } from "next/navigation";
import ThemeSwitcher from "@/Component/ThemeSwitcher";
import CopyRightText from "../Component/CopyRightText";
const inconsolata = Inconsolata({ weight: "500", preload: true });
const DEFAULT_COPYRIGHT_HOLDER = "Faouzi Mohamed";
const DEFAULT_LICENSE_YEAR = new Date().getFullYear().toString();

export default function Home() {
  const query = useSearchParams();
  const holder = query.get("holder") || DEFAULT_COPYRIGHT_HOLDER;
  const year = query.get("year") || DEFAULT_LICENSE_YEAR;
  let copyRightHolder = DEFAULT_COPYRIGHT_HOLDER;
  let licenseYear = DEFAULT_LICENSE_YEAR;
  if (holder) {
    copyRightHolder = holder;
  }
  if (isValidYear(year)) {
    licenseYear = year;
  }

  return (
    <main
      className={`w-full overflow-auto text-start ${inconsolata.className} 
      flex py-10 justify-center px-10`}>
      <article
        className='relative border p-8 rounded-sm bg-slate-50 w-full h-full max-w-3xl 
      text-justify text-base md:text-lg dark:bg-[#1e262b] dark:border-gray-600 drop-shadow-md'>
        <ThemeSwitcher />
        <CopyRightText
          licenseYear={licenseYear}
          copyRightHolder={copyRightHolder}
        />
      </article>
    </main>
  );
}
function isValidYear(year: string): boolean {
  const nextYear = new Date().getFullYear() + 1;
  return (
    Boolean(year) &&
    !Number.isNaN(year) &&
    Number(year) > 1900 &&
    Number(year) < nextYear
  );
}
