import { SiteFrame } from "./SiteFrame"

type Entry = {
  citation: string;
  link?: string;
  summary: string;
  relevance: string;
}

const entries: Entry[] = [
  {
    citation: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam.',
    link: 'https://ottomaris.com',
    summary: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Ex sapien vitae pellentesque sem placerat in id. Pretium tellus duis convallis tempus leo eu aenean. Urna tempor pulvinar vivamus fringilla lacus nec metus. Iaculis massa nisl malesuada lacinia integer nunc posuere. Semper vel class aptent taciti sociosqu ad litora. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Nulla molestie mattis scelerisque maximus eget fermentum odio. Purus est efficitur laoreet mauris pharetra vestibulum fusce.',
    relevance: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.'
  },
];

// TODO: remove 
for (let i = 0; i < 14; i++) {
  entries.push(entries[0]);
}

export function Geog560AnnoBib() {
  return (
    <SiteFrame>
      <div className="flex flex-col gap-6 self-center bg-black px-20 py-10 max-w-350">
        <h1 className="text-lg">Annotated Bibliography</h1>
        <h2>Compiled by Jane Ottomaris Hedge for GEOG 560, Fall 2026, Oregon State University</h2>
        <ul className="flex flex-col gap-5">
        {entries.map((entry) => (
          <li className="text-sm">
            <b className="">{entry.citation} <a href={entry.link}>{entry.link}</a></b>
            <div className="ms-10 mbs-2">
              <p><b>Summary: </b>{entry.summary}</p>
              <p className="mbs-2"><b>Relevance: </b>{entry.relevance}</p>
            </div>
          </li>
        ))}
        </ul>
      </div>
    </SiteFrame>
  )
}

export default Geog560AnnoBib
