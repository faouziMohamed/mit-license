import { Inconsolata } from "@next/font/google";
import Moon from "@/Component/Moon";
import Sun from "@/Component/Sun";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
const inconsolata = Inconsolata({ weight: "500", preload: true });
const DEFAULT_COPYRIGHT_HOLDER = "Faouzi Mohamed";
const DEFAULT_LICENSE_YEAR = new Date().getFullYear().toString();

export default function Home() {
  const query = useSearchParams();
  const holder = query.get("holder") || DEFAULT_COPYRIGHT_HOLDER;
  const year = query.get("year") || DEFAULT_LICENSE_YEAR;
  console.log({ query, holder, year });
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
        className='relative border p-8 rounded-sm bg-white w-full h-full max-w-3xl 
      text-justify text-base md:text-lg dark:bg-[#181a1b]'>
        <ThemeSwitcher />
        <CopyRightText
          licenseYear={licenseYear}
          copyRightHolder={copyRightHolder}
        />
      </article>
    </main>
  );
}
type Theme = "dark" | "light";
function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className='absolute right-2 top-2'>
      <button onClick={toggleTheme}>
        {theme === "light" ? <Moon /> : <Sun />}
      </button>
    </div>
  );
}
function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");
  // get the current theme from local storage if it exists onMount
  useEffect(() => {
    updateTheme();
  }, []);

  // set the theme on click
  const toggleTheme = () => {
    if (!window) return;
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
    console.log("Theme toggled to: ", theme);
  };
  return { theme, toggleTheme };

  function updateTheme() {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setTheme(theme as Theme);
    } else {
      setTheme("light");
    }
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
}

function CopyRightText({
  licenseYear,
  copyRightHolder,
}: {
  licenseYear: string;
  copyRightHolder: string;
}) {
  return (
    <div>
      <h1 className='font-bold text-3xl underline mb-8'>The MIT License</h1>
      <p className='border-y border-gray-200'>Begin license text.</p>
      <section>
        <p className='font-bold'>
          Copyright © <span className='font-bold'>{licenseYear}</span>{" "}
          <span className='font-bold'>{copyRightHolder}</span>
        </p>
        <div>
          <p>
            Permission is hereby granted, free of charge, to any person
            obtaining a copy of this software and associated documentation files
            (the &quot;Software&quot;), to deal in the Software without
            restriction, including without limitation the rights to use, copy,
            modify, merge, publish, distribute, sublicense, and/or sell copies
            of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:
          </p>
          <p>
            The above copyright notice and this permission notice shall be
            included in all copies or substantial portions of the Software.
          </p>
          <p>
            THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY
            KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
            BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
            ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
            CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
          </p>
        </div>
      </section>
      <p className='border-y border-gray-200'>End license text.</p>
    </div>
  );
}

function isValidYear(year: string): boolean {
  return (
    Boolean(year) &&
    !Number.isNaN(year) &&
    Number(year) > 1900 &&
    Number(year) < 2100
  );
}

// export function getServerSideProps(context: NextPageContext) {
//   let { holder, year } = context.query;
//   if (!holder) {
//     holder = DEFAULT_COPYRIGHT_HOLDER;
//   }
//   if (!year) {
//     year = DEFAULT_LICENSE_YEAR;
//   }
//   return {
//     props: {
//       query: { holder, year },
//     },
//   };
// }
