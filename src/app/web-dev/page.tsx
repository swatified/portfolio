import GridBackground from '@/components/ui/GridBackground';

export default function Home() {
  return (
    <main>
      <GridBackground>
        <p className="text-4xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Backgrounds
        </p>
      </GridBackground>
    </main>
  );
}