import Attribution from './components/Attribution'
import Countdown from './components/Countdown/Countdown'

const App = () => {
  return (
    <main className="relative min-h-screen pt-[115px] md:pt-[155px] pb-10">
      <div className="px-2">
        <Countdown/>
      </div>
      <div className="absolute bottom-0 w-full h-10 flex items-center justify-center">
        <Attribution/>
      </div>
    </main>
  )
}

export default App
