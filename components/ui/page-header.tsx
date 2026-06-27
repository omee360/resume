type PageHeaderProps = {
  title: string;
  children: React.ReactNode;
};

export function PageHeader({ title, children }: PageHeaderProps) {
  return (
    <section className="mb-12">
      <h1 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-gray-50">
        {title}
      </h1>
      <div className="mt-4 max-w-2xl space-y-4 text-gray-600 dark:text-gray-400">
        {children}
      </div>
    </section>
  );
}
