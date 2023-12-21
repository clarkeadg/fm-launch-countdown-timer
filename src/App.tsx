import Attribution from './components/Attribution'
import ComingSoon from './components/ComingSoon/ComingSoon'

const App = () => {
  return (
    <main className="flex w-full justify-center min-h-screen">
      <div className="main-inner w-full min-h-full relative pb-10">
        <ComingSoon/>
        <div className="absolute bottom-0 w-full h-10 flex items-center justify-center">
          <Attribution/>
        </div>
      </div>
    </main>
  )
}

export default App
