import Button from "@/components/button";

export default function Home() {
  return (
  <>
    <h2 className="text-2xl font-bold text-blue-300">My Test App</h2>
      <Button>Primary</Button>
    <Button variant="secondary" size="lg">Secondary</Button>
    <Button variant="danger" size="sm">Danger</Button>
    <Button>Primary</Button>
      
  </>);
}