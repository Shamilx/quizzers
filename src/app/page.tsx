import Link from "next/link";
import Form from "@/components/lib/home-page-form/Form";

export default function Home() {
  return (
    <div className="flex h-[100vh] items-center">
      <div className="mx-5 flex flex-1 flex-col gap-3 md:flex-row">
        <div className="flex-1">
          <p className="ms-5 text-center text-[16px] font-bold uppercase md:max-w-[450px] md:text-left md:text-[48px]">
            Do hundreds of quizzes from one place
          </p>
        </div>

        <div className="min-h-[300px] flex-1 rounded-2xl border border-black">
          <Form className="p-5">
            <h2 className="text-center font-bold uppercase text-zinc-700">
              Generate Quiz
            </h2>

            <div className="flex flex-wrap justify-center gap-2">
              <Section
                header="Category"
                options={[
                  "Linux",
                  "DevOps",
                  "Code",
                  "Docker",
                  "Bash",
                  "Sql",
                  "CMS",
                ]}
              />

              <Section
                header="Difficulty"
                options={["Easy", "Medium", "Hard"]}
              />

              <Section header="Questions" options={convert(1, 15)} />

              <div className="flex w-[48%] items-end">
                <button
                  type="submit"
                  className="flex-1 rounded-lg border border-black bg-black py-2 text-white transition-colors hover:bg-white hover:text-black"
                >
                  Generate
                </button>
              </div>
            </div>

            <div className="mt-5 flex flex-col  justify-center gap-3 md:mx-20">
              <Link
                href={"/quizzes/random"}
                className="rounded-lg border border-black bg-black px-2 py-2 text-center text-white transition-colors hover:bg-white hover:text-black"
              >
                Generate Random
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

const Section = ({
  header,
  options,
}: {
  header: string;
  options: string[];
}) => {
  return (
    <section className="w-[48%] items-center">
      <div className="flex flex-col gap-1">
        <label className="font-medium">{header}</label>
        <Select options={options} name={header.toLowerCase().toString()} />
      </div>
    </section>
  );
};

const Select = ({ options, name }: { options: string[]; name: string }) => {
  return (
    <select
      className="rounded-lg border border-black px-1 py-2 outline-none"
      name={name}
    >
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
};

function convert(val1: number, val2: number) {
  const result: string[] = [];

  for (let i = val1; i <= val2; i++) {
    result.push(i.toString());
  }

  return result;
}
