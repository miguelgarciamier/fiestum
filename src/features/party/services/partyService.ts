export type Party = {
  id: string;
  name: string;
  location: string;
  startsAt: string;
};

const demo: Party[] = [
  { id: "1", name: "Fiestum Central", location: "Centro", startsAt: new Date().toISOString() },
  { id: "2", name: "Fiestum Norte", location: "Norte", startsAt: new Date().toISOString() },
];

export async function listParties(): Promise<Party[]> {
  await new Promise((r) => setTimeout(r, 300));
  return demo;
}
