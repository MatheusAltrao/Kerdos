'use client'
import { Pie as PieChart } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels)

interface PieProps {
  labels: string[]
  values: number[]
  colors: string[]
}

const Pie = ({ labels, values, colors }: PieProps) => {
  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: colors,
        borderWidth: 0,
      },
    ],
  }

  const options = {
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      datalabels: {
        color: '#fff',
        font: {
          size: 14,
          weight: 'bold' as const,
        },
        formatter: (value: any, context: any) => {
          const total = context.chart.data.datasets[0].data.reduce(
            (acc: number, value: number) => acc + value,
            0,
          )
          const percentage = ((value / total) * 100).toFixed(2) + '%'
          return percentage
        },
      },
      tooltip: {
        titleFont: {
          weight: 'bold' as const,
          size: 14,
        },
        bodyFont: {
          weight: 'bold' as const,
          size: 14,
        },
        callbacks: {
          label: (context: any) => {
            const labelIndex = context.dataIndex
            const dataset = context.dataset
            const value = dataset.data[labelIndex]
            return value
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  }

  return (
    <PieChart className=" h-[300px] w-[300px]" data={data} options={options} />
  )
}

export default Pie
