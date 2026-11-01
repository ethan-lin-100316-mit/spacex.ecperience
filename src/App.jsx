import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import VehicleExplorer from './pages/VehicleExplorer'
import AlgorithmArena from './pages/AlgorithmArena'
import PropulsionLab from './pages/PropulsionLab'
import LandingSimulator from './pages/LandingSimulator'
import StructureLab from './pages/StructureLab'
import FlightSoftwareLab from './pages/FlightSoftwareLab'
import MarsMissionPlanner from './pages/MarsMissionPlanner'
import StarlinkNetworkLab from './pages/StarlinkNetworkLab'
import MissionControl from './pages/MissionControl'
import InterviewLab from './pages/InterviewLab'
import FieldGuide from './pages/FieldGuide'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blueprint" element={<VehicleExplorer />} />
        <Route path="arena" element={<AlgorithmArena />} />
        <Route path="propulsion" element={<PropulsionLab />} />
        <Route path="landing" element={<LandingSimulator />} />
        <Route path="structures" element={<StructureLab />} />
        <Route path="avionics" element={<FlightSoftwareLab />} />
        <Route path="mars" element={<MarsMissionPlanner />} />
        <Route path="starlink" element={<StarlinkNetworkLab />} />
        <Route path="mission" element={<MissionControl />} />
        <Route path="interview" element={<InterviewLab />} />
        <Route path="guide" element={<FieldGuide />} />
      </Route>
    </Routes>
  )
}
