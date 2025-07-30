
import { Card, CardContent } from '@/components/ui/card';

interface TimelineItem {
  period: string;
  title: string;
  institution?: string;
  company?: string;
  description: string;
  status: 'current' | 'completed';
  type: 'education' | 'experience';
}

interface TimelineProps {
  items: TimelineItem[];
  type: 'education' | 'experience';
}

const Timeline = ({ items, type }: TimelineProps) => {
  const isEducation = type === 'education';
  const colorScheme = isEducation 
    ? 'from-purple-600 to-electric' 
    : 'from-electric to-purple-600';

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 to-gray-200 dark:from-gray-600 dark:to-gray-700"></div>
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative flex items-start">
            {/* Timeline Dot */}
            <div className="relative z-10 flex-shrink-0">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${colorScheme} flex items-center justify-center shadow-lg`}>
                <div className="text-2xl">
                  {isEducation ? '🎓' : '💼'}
                </div>
              </div>
              {/* Connection Line to Card */}
              <div className="absolute top-8 left-16 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600"></div>
            </div>

            {/* Timeline Card */}
            <Card className="ml-8 flex-1 group hover:shadow-xl dark:hover:shadow-xl dark:hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 border-0 dark:border dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800">
              <CardContent className="p-0">
                <div className="flex">
                  <div className={`w-2 bg-gradient-to-b ${colorScheme} flex-shrink-0`}></div>
                  <div className="p-6 flex-1">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                      <h4 className={`font-bold text-lg text-navy dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${colorScheme} transition-all duration-300`}>
                        {item.title}
                      </h4>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                        item.status === 'current' 
                          ? `bg-gradient-to-r ${colorScheme} bg-opacity-10 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-600` 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                      }`}>
                        {item.period}
                      </span>
                    </div>

                    {/* Institution/Company */}
                    <p className={`font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${colorScheme}`}>
                      {item.institution || item.company}
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors">
                      {item.description}
                    </p>

                    {/* Status Badge */}
                    {item.status === 'current' && (
                      <div className="mt-4 inline-flex items-center">
                        <div className={`w-2 h-2 bg-gradient-to-r ${colorScheme} rounded-full mr-2 animate-pulse`}></div>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                          Currently {isEducation ? 'Studying' : 'Working'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
