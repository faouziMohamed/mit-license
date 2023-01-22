export default function CopyRightText({
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
