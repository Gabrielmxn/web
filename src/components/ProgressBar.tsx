interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({progress}: ProgressBarProps){

  return(
    <div className="h-3 rounded-lg bg-zinc-700 w-full mt-4">
    <div 
      role="progressbar"
      className="h-3 rounded-xl bg-violet-600 w-3/4" 
      aria-label='Progresso de hábitos completados nesse dia'
      aria-valuenow={75}
      style={{
        width: `${progress}%`
      }}
    />
  </div>
  )
}