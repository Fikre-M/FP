import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, ChevronDown, ChevronUp, Brain, Zap } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { problemSolutions } from '../../data/problemSolutions';
import { ProblemSolution } from '../../types';

const ProblemSolving: React.FC = () => {
  const [selectedProblem, setSelectedProblem] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const complexityColors = {
    Easy: 'bg-green-500',
    Medium: 'bg-yellow-500',
    Hard: 'bg-red-500'
  };

  const filteredProblems = problemSolutions.filter(problem => 
    filter === 'all' || problem.complexity.toLowerCase() === filter
  );

  const toggleProblem = (id: number) => {
    setSelectedProblem(selectedProblem === id ? null : id);
  };

  return (
    <section id="problem-solving" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Brain className="w-8 h-8 text-blue-500 mr-3" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Problem Solving
            </h2>
          </div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Explore my approach to solving algorithmic challenges and coding problems. 
            Each solution includes detailed explanations and optimized implementations.
          </p>
          <div className="mx-auto h-1 w-16 sm:w-24 bg-blue-700 rounded"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="flex space-x-2 bg-gray-800 rounded-lg p-1">
            {['all', 'easy', 'medium', 'hard'].map((level) => (
              <button
                key={level}
                onClick={() => setFilter(level)}
                className={`px-4 py-2 rounded-md transition-all duration-200 capitalize ${
                  filter === level
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Problems List */}
        <div className="space-y-4">
          {filteredProblems.map((problem, index) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              {/* Problem Header */}
              <div
                onClick={() => toggleProblem(problem.id)}
                className="p-6 cursor-pointer hover:bg-gray-750 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Code className="w-5 h-5 text-blue-400" />
                      <h3 className="text-xl font-semibold text-white">
                        {problem.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${complexityColors[problem.complexity]}`}>
                        {problem.complexity}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-3">{problem.problem}</p>
                    <div className="flex flex-wrap gap-2">
                      {problem.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-md text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="ml-4">
                    {selectedProblem === problem.id ? (
                      <ChevronUp className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>

              {/* Problem Details */}
              <AnimatePresence>
                {selectedProblem === problem.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-700"
                  >
                    <div className="p-6">
                      {/* Solution Explanation */}
                      <div className="mb-6">
                        <div className="flex items-center mb-3">
                          <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                          <h4 className="text-lg font-semibold text-white">Solution Approach</h4>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{problem.solution}</p>
                      </div>

                      {/* Code Implementation */}
                      {problem.code && (
                        <div>
                          <div className="flex items-center mb-3">
                            <Code className="w-5 h-5 text-green-400 mr-2" />
                            <h4 className="text-lg font-semibold text-white">Implementation</h4>
                          </div>
                          <div className="rounded-lg overflow-hidden">
                            <SyntaxHighlighter
                              language={problem.language || 'javascript'}
                              style={vscDarkPlus}
                              customStyle={{
                                margin: 0,
                                borderRadius: '0.5rem',
                                fontSize: '14px'
                              }}
                            >
                              {problem.code}
                            </SyntaxHighlighter>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">
              {problemSolutions.filter(p => p.complexity === 'Easy').length}
            </div>
            <div className="text-green-100">Easy Problems</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">
              {problemSolutions.filter(p => p.complexity === 'Medium').length}
            </div>
            <div className="text-yellow-100">Medium Problems</div>
          </div>
          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">
              {problemSolutions.filter(p => p.complexity === 'Hard').length}
            </div>
            <div className="text-red-100">Hard Problems</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolving;