import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { NotebookText } from 'lucide-react'

const ReportDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex justify-end">
          <Button variant={'outline'} className="gap-2 ">
            Relatório IA <NotebookText size={20} />
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default ReportDialog
