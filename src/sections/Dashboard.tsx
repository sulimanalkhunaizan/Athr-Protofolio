import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TourismData {
  year: number;
  tourists: number; // in millions
  spending: number; // in billions SAR
}

interface SummaryData {
  tourists: number;
  overnightStays: number;
  averageStay: number;
  spending: number;
}

export default function TourismDashboardSection() {
  const [hoveredData, setHoveredData] = useState<TourismData | null>(null);

  const tourismData: TourismData[] = [
    { year: 2015, tourists: 44, spending: 22 },
    { year: 2016, tourists: 43, spending: 28 },
    { year: 2017, tourists: 42, spending: 19 },
    { year: 2018, tourists: 42, spending: 21 },
    { year: 2019, tourists: 45, spending: 34 },
    { year: 2020, tourists: 37, spending: 16 },
    { year: 2021, tourists: 61, spending: 77 },
    { year: 2022, tourists: 76, spending: 90 },
    { year: 2023, tourists: 80, spending: 105 },
    { year: 2024, tourists: 86.16, spending: 115.28 }
  ];

  const summary2024: SummaryData = {
    tourists: 86.16,
    overnightStays: 538.62,
    averageStay: 6.25,
    spending: 115.28
  };

  const maxTourists = Math.max(...tourismData.map(d => d.tourists));
  const maxSpending = Math.max(...tourismData.map(d => d.spending));

  return (
    <section id="statistics" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(251,191,36,0.3)_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-[Noto Sans Arabic]">
            السياحة المحلية – المملكة العربية السعودية
          </h2>
          <p className="text-xl text-amber-200 font-light font-[Noto Sans Arabic]">(2015–2024)</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-amber-400/20 p-8 relative overflow-hidden"
          >
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-green-400/5 rounded-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-white font-[Noto Sans Arabic]">اتجاهات نمو السياحة</h3>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                    <span className="text-white text-sm font-[Noto Sans Arabic]">السياح (مليون)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-white text-sm font-[Noto Sans Arabic]">الإنفاق (مليار ريال)</span>
                  </div>
                </div>
              </div>

              {/* Chart Container */}
              <div className="relative h-80 ml-16 mr-16">
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-px bg-gray-600/50"></div>
                  ))}
                </div>

                {/* Bars and Line */}
                <div className="absolute inset-0 flex items-end justify-between px-4">
                  {tourismData.map((data, index) => (
                    <div key={data.year} className="flex flex-col items-center justify-end relative h-full">
                      {/* Bar for Tourists */}
                      <motion.div
                        className="w-8 bg-gradient-to-t from-amber-400 to-amber-600 rounded-t-lg relative cursor-pointer group"
                        style={{ 
                          height: `${(data.tourists / maxTourists) * 100}%`
                        }}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${(data.tourists / maxTourists) * 100}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        onMouseEnter={() => setHoveredData(data)}
                        onMouseLeave={() => setHoveredData(null)}
                      >
                        {/* Tooltip */}
                        {hoveredData?.year === data.year && (
                          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-gray-900 border border-amber-400/30 rounded-lg p-3 min-w-32">
                            <div className="text-amber-400 font-bold text-center mb-1">{data.year}</div>
                            <div className="text-amber-200 text-sm">Tourists: {data.tourists}M</div>
                            <div className="text-green-200 text-sm">Spending: {data.spending}B SAR</div>
                          </div>
                        )}
                      </motion.div>

                      {/* Line for Spending */}
                      <motion.div
                        className="absolute w-1 bg-green-400 rounded-full"
                        style={{
                          height: `${(data.spending / maxSpending) * 100}%`,
                          bottom: 0
                        }}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${(data.spending / maxSpending) * 100}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      >
                        <div className="absolute -top-1 -left-1 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900"></div>
                      </motion.div>

                      {/* Year Label */}
                      <div className="absolute -bottom-8 text-gray-400 text-sm">
                        {data.year}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Y-axis Labels - Left */}
                <div className="absolute -left-16 top-0 h-full flex flex-col justify-between text-gray-400 text-sm py-4">
                  <span>{maxTourists}M</span>
                  <span>{(maxTourists * 0.75).toFixed(0)}M</span>
                  <span>{(maxTourists * 0.5).toFixed(0)}M</span>
                  <span>{(maxTourists * 0.25).toFixed(0)}M</span>
                  <span>0M</span>
                </div>

                {/* Right Y-axis Labels */}
                <div className="absolute -right-16 top-0 h-full flex flex-col justify-between text-gray-400 text-sm py-4">
                  <span>{maxSpending}B</span>
                  <span>{(maxSpending * 0.75).toFixed(0)}B</span>
                  <span>{(maxSpending * 0.5).toFixed(0)}B</span>
                  <span>{(maxSpending * 0.25).toFixed(0)}B</span>
                  <span>0B</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-green-400/20 p-8 relative overflow-hidden"
          >
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-amber-400/5 rounded-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2 font-[Noto Sans Arabic]">أداء 2024</h3>
              <p className="text-green-300 text-sm mb-8 font-[Noto Sans Arabic]">أبرز إنجازات العام القياسي</p>

              <div className="space-y-6">
                <div className="p-4 bg-gray-700/30 rounded-xl border border-amber-400/20">
                  <div className="text-amber-200 text-sm font-[Noto Sans Arabic]">السياح</div>
                  <div className="text-2xl font-bold text-white">{summary2024.tourists} مليون</div>
                </div>

                <div className="p-4 bg-gray-700/30 rounded-xl border border-green-400/20">
                  <div className="text-green-200 text-sm font-[Noto Sans Arabic]">الإقامات الليلية</div>
                  <div className="text-2xl font-bold text-white">{summary2024.overnightStays} مليون ليلة</div>
                </div>

                <div className="p-4 bg-gray-700/30 rounded-xl border border-amber-400/20">
                  <div className="text-amber-200 text-sm font-[Noto Sans Arabic]">متوسط الإقامة</div>
                  <div className="text-2xl font-bold text-white">{summary2024.averageStay} ليلة</div>
                </div>

                <div className="p-4 bg-gray-700/30 rounded-xl border border-green-400/20">
                  <div className="text-green-200 text-sm font-[Noto Sans Arabic]">إجمالي الإنفاق</div>
                  <div className="text-2xl font-bold text-white">{summary2024.spending} مليار ريال</div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-600/50">
                <p className="text-gray-400 text-xs text-center font-[Noto Sans Arabic]">
                  مصدر البيانات: وزارة السياحة، 2024
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Growth Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 bg-amber-400/10 rounded-2xl border border-amber-400/30">
            <div className="text-3xl text-amber-400 font-bold">+96%</div>
            <div className="text-amber-200 mt-2 font-[Noto Sans Arabic]">نمو السياح (2015-2024)</div>
          </div>
          <div className="text-center p-6 bg-green-400/10 rounded-2xl border border-green-400/30">
            <div className="text-3xl text-green-400 font-bold">+424%</div>
            <div className="text-green-200 mt-2 font-[Noto Sans Arabic]">نمو الإنفاق (2015-2024)</div>
          </div>
          <div className="text-center p-6 bg-amber-400/10 rounded-2xl border border-amber-400/30">
            <div className="text-3xl text-amber-400 font-bold">6.25x</div>
            <div className="text-amber-200 mt-2 font-[Noto Sans Arabic]">متوسط مدة الإقامة</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}