import { generateAiReportAction } from '@/actions/generateAiReportAction'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { NotepadText } from 'lucide-react'
import { useState } from 'react'
import Markdown from 'react-markdown'

const ReportDialog = () => {
  const [report, setReport] = useState<string | null>()
  const [reportIsLoading, setReportIsLoading] = useState<boolean>(false)

  const handleGenerateReports = async () => {
    setReportIsLoading(true)
    try {
      const aiReport = await generateAiReportAction()
      setReport(aiReport)
      setReportIsLoading(false)
    } catch (error) {
      console.log(error)
      setReportIsLoading(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex justify-end">
          <Button className="gap-2" variant={'outline'}>
            Relatório IA <NotepadText size={20} />
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Relatório AI</DialogTitle>
          <DialogDescription>
            Use a IA para gerar um relatório sobre as suas finanças
          </DialogDescription>
        </DialogHeader>

        {report && (
          <ScrollArea className="h-[450px] w-full">
            <div className="prose-h2:bold prose   prose-strong:font-medium  pr-4">
              <Markdown>{report}</Markdown>
            </div>
          </ScrollArea>
        )}

        <DialogFooter>
          <DialogClose>
            <Button variant={'destructive'}>Cancelar</Button>
          </DialogClose>
          <Button disabled={reportIsLoading} onClick={handleGenerateReports}>
            {reportIsLoading ? 'Gerando relatório...' : 'Gerar relatório'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ReportDialog
