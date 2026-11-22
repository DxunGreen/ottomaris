import { SiteFrame } from "./SiteFrame"

type Entry = {
  citation: string;
  link?: string;
  summary: string;
  reflection: string;
}

const entries: Entry[] = [];

// TODO: remove 
while (entries.length < 15) entries.push({
  citation: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam.',
  link: 'https://ottomaris.com',
  summary: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Ex sapien vitae pellentesque sem placerat in id. Pretium tellus duis convallis tempus leo eu aenean. Urna tempor pulvinar vivamus fringilla lacus nec metus. Iaculis massa nisl malesuada lacinia integer nunc posuere. Semper vel class aptent taciti sociosqu ad litora. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Nulla molestie mattis scelerisque maximus eget fermentum odio. Purus est efficitur laoreet mauris pharetra vestibulum fusce.',
  reflection: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.'
});

export function Geog560AnnoBib() {
  return (
    <SiteFrame>
      <div className="flex flex-col gap-6 self-center bg-black px-10 md:px-20 py-10 max-w-300 rounded-sm">
        <h1 className="text-lg text-center">Annotated Bibliography</h1>
        <h2 className="text-lg text-center">Compiled by Jane Ottomaris Hedge for GEOG 560, Fall 2026, Oregon State University</h2>
        <ul className="flex flex-col gap-5">
        {entries.map((entry) => (
          <li className="text-med">
            <p className="">{entry.citation} <a href={entry.link}>{entry.link}</a></p>
            <div className="ms-5 md:ms-10 mbs-2">
              <p>Summary: <span className="text-muted-foreground">{entry.summary}</span></p>
              <p className="mbs-2">Reflection: <span className="text-muted-foreground">{entry.reflection}</span></p>
            </div>
          </li>
        ))}
        </ul>
      </div>
    </SiteFrame>
  )
}

export default Geog560AnnoBib
