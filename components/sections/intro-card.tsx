export type IntroCardProps = {
  name: string;
  title: string;
  description: string;
};

export function IntroCard({ name, title, description }: IntroCardProps) {
  return (
    <section>
      <p>{title}</p>
      <p>Hi, I am {name} 👋</p>
      <p>{description}</p>
    </section>
  );
}