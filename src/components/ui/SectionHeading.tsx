import { useReveal } from '../../hooks/useReveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="reveal text-center mb-16">
      {eyebrow && (
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-300 mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      <div className="w-16 h-1.5 bg-gradient-to-r from-brand-500 to-brand-300 rounded-full mx-auto mb-6" />
      {description && (
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;