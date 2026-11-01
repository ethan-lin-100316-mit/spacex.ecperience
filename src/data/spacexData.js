// SpaceX Engineering Knowledge Base, 5-Step Algorithm, Role Profiles & Technical Data

export const spaceXAlgorithm = [
  {
    step: 1,
    title: "Make Requirements Less Dumb",
    subtitle: "Question every requirement",
    summary: "Your requirement is definitely dumb; it does not matter who gave it to you. It is particularly dangerous if a smart person gave it to you, because you might not question them.",
    spacexExample: "NASA initially had a requirement for hypergolic abort engines on Dragon to have redundant separate helium pressurization circuits. SpaceX asked who authored the requirement; it was an engineer from an old shuttle program who had left decades ago. By deleting the extra helium plumbing, Dragon saved 120 kg of mass and eliminated 14 potential leak failure points.",
    actionChecklist: [
      "Find the exact human name behind every requirement, not a department name",
      "Do not accept 'industry standard' as a scientific reason",
      "Challenge the constraints: what physics rule prevents this?"
    ],
    badHabit: "Accepting a specification book without challenging who wrote each number."
  },
  {
    step: 2,
    title: "Delete the Part or Process",
    subtitle: "The best part is no part. The best process is no process.",
    summary: "If you are not occasionally adding things back into the design that you previously deleted (at least 10% of the time), you are not deleting enough.",
    spacexExample: "Raptor 1 had hundreds of external pressure tubes, brackets, and sensors. In Raptor 3, engineers eliminated over 100 kg of bolt-on plumbing, secondary manifolds, and heat shields by integrating channels directly into 3D-printed and cast jackets. On Starship Booster, they deleted the landing legs entirely, choosing instead to catch the booster with tower chopsticks ('Mechazilla').",
    actionChecklist: [
      "Ask: What happens if this component simply disappears?",
      "Eliminate 'just in case' parts",
      "Combine functions into existing structure instead of creating brackets"
    ],
    badHabit: "Spending months optimizing a bracket that shouldn't exist in the first place."
  },
  {
    step: 3,
    title: "Simplify or Optimize",
    subtitle: "Only optimize what cannot be deleted",
    summary: "The most common error of a smart engineer is to optimize a thing that should not exist. Step 3 must always come AFTER Step 2.",
    spacexExample: "Falcon 9 was originally slated to use parachute recovery for the first stage. Engineers spent significant effort designing sea-drogues and paragliders until they realized seawater destroys Merlin engines and parachutes are too heavy. They abandoned parachutes to optimize propulsive landing using the engines already on the rocket.",
    actionChecklist: [
      "Never optimize before attempting to delete",
      "Simplify the interfaces between disciplines",
      "Minimize moving parts"
    ],
    badHabit: "Creating a complex automated robotic assembly for a part that can be deleted."
  },
  {
    step: 4,
    title: "Accelerate Cycle Time",
    subtitle: "Move fast, but don't dig your grave faster",
    summary: "You can move faster, but you must only go fast after you have executed Steps 1, 2, and 3. Going fast on the wrong thing just gets you to the ditch quicker.",
    spacexExample: "Starbase builds Starship rings out in open tents by the Gulf of Mexico instead of waiting 5 years to build a cleanroom aerospace facility. When Starship SN8 exploded on landing, the team had SN9 and SN10 already stacked and ready to roll to the pad within weeks.",
    actionChecklist: [
      "Reduce manufacturing cycle time from weeks to hours",
      "Direct engineer-to-technician feedback on the shop floor",
      "Accept rapid test failures to acquire flight data faster than computer simulations"
    ],
    badHabit: "Spending 2 years in CAD simulation when a $20,000 physical burst test can give ground truth in 3 days."
  },
  {
    step: 5,
    title: "Automate",
    subtitle: "The final step, never the first",
    summary: "Elon Musk famously said at Tesla and SpaceX: 'I made the mistake of automating too early. We automated things before the process was stable.' Automation must only happen once steps 1-4 are proven.",
    spacexExample: "Starship orbital heat shield tiles are now inspected using automated high-speed camera gantries and robotic placement, but only after engineers spent months manually gluing and testing tile clip geometry in Texas heat to understand real-world vibration shedding.",
    actionChecklist: [
      "Verify the manual workflow is flawless first",
      "Automate repetitive telemetry checkouts and test sequences",
      "Let computers handle millisecond control loops, keep humans on architecture"
    ],
    badHabit: "Building an automated tool before you know if the rocket design will change tomorrow."
  }
];

export const engineeringDisciplines = [
  {
    id: "propulsion",
    title: "Propulsion Engineering",
    focus: "Raptor 3, Merlin 1D, Draco Thrusters",
    icon: "Flame",
    color: "#f97316",
    summary: "Propulsion engineers design the world's highest-pressure rocket engines. Raptor 3 operates on a Full-Flow Staged Combustion cycle (FFSC) burning sub-cooled liquid methane (CH4) and liquid oxygen (LOX) at over 350 bar chamber pressure.",
    dailyWork: [
      "Analyzing turbopump cavitation and cryogenic bearing temperatures during static fire runs",
      "Designing additive manufacturing (3D printed copper-alloy) regenerative cooling channels",
      "Tuning fuel-rich and ox-rich preburner gas temperatures to prevent turbine blade melting",
      "Reviewing McGregor test stand hot-fire acoustic and pressure wave spectrographs"
    ],
    keyTech: ["Full-Flow Staged Combustion", "Regenerative Cooling", "Cryogenic Fluids", "Additive Manufacturing", "ANSYS Fluent"]
  },
  {
    id: "gnc",
    title: "Guidance, Navigation & Control (GNC)",
    focus: "Hoverslam, Grid Fins, Mechazilla Catch",
    icon: "Compass",
    color: "#06b6d4",
    summary: "GNC engineers develop the mathematical algorithms that make multi-story rockets land backwards on robotic droneships and catch between giant tower arms with centimeter precision.",
    dailyWork: [
      "Writing real-time Convex Optimization (G-FOLD) trajectory solvers in C++",
      "Simulating aerodynamic flutter and hypersonic shock interactions on titanium grid fins",
      "Designing the bellyflop aerodynamic pitch control using forward and aft body flaps",
      "Tuning Thrust Vector Control (TVC) hydraulic/electric gimbal response loops under gust conditions"
    ],
    keyTech: ["Convex Optimization", "State Estimation (Kalman Filters)", "C++ Real-Time Linux", "Aerodynamic Flaps", "TVC Gimbal"]
  },
  {
    id: "structures",
    title: "Structures & Materials",
    focus: "304L Stainless Steel, Carbon Composites, TPS",
    icon: "Layers",
    color: "#8b5cf6",
    summary: "Structures engineers design the airframes, propellant tanks, and heat shields. They threw away traditional carbon fiber to pioneer rapid welding of 304L stainless steel at a fraction of the cost.",
    dailyWork: [
      "Calculating thin-wall cylinder hoop stress under 6 bar cryogenic pressure and 4g aerodynamic loads",
      "Finite Element Analysis (FEA) on the Starship hot-staging ring and interstage adapter",
      "Optimizing hexagonal ceramic Thermal Protection System (TPS) tile mounting pins under 1,400°C re-entry plasma",
      "Investigating weld seam metallurgy and cryo-hardening at -196°C"
    ],
    keyTech: ["304L / 30X Stainless Steel", "Cryo-forming", "Hexagonal TPS Tiles", "FEA Structural Analysis", "Orbital Refueling"]
  },
  {
    id: "avionics",
    title: "Avionics & Flight Software",
    focus: "Triple Modular Redundancy, Linux, Starlink",
    icon: "Cpu",
    color: "#10b981",
    summary: "Avionics engineers write the software and build the electronics that control the vehicle. SpaceX rockets run dual-core x86 and ARM processors executing a customized real-time Linux kernel.",
    dailyWork: [
      "Implementing 2-out-of-3 triple modular voting logic for flight-critical sensor readings",
      "Programming CAN bus, Ethernet, and serial controllers for distributed valve solenoids",
      "Hardware-In-The-Loop (HITL) simulation running thousands of virtual rocket launches daily",
      "Zero-latency telemetry streaming over S-band, X-band, and Starlink space relays"
    ],
    keyTech: ["Triple Modular Redundancy (TMR)", "Real-Time Linux", "C++20", "HITL Simulation", "Distributed Bus Architecture"]
  },
  {
    id: "launchops",
    title: "Launch & Ground Operations",
    focus: "Starbase Mechazilla, Pad 39A, Deluge System",
    icon: "ShieldAlert",
    color: "#ec4899",
    summary: "Launch engineers turn rockets around, handle super-chilled cryogenic loading, manage high-pressure gas farms, and command the giant Mechazilla catch chopsticks.",
    dailyWork: [
      "Subcooling tens of thousands of gallons of LOX to -196°C and Liquid Methane to -162°C",
      "Operating the water deluge sound suppression system pumping 350,000 gallons in 30 seconds",
      "Coordinating the fast-retract umbilical quick-disconnect (QD) plates at T-0",
      "Executing the launch countdown polling (PROP, GNC, AVIONICS, RANGE, LD GO/NO-GO)"
    ],
    keyTech: ["Cryogenic Loading", "Water Deluge Sound Suppression", "Mechazilla Tower Dynamics", "Launch Sequencer"]
  }
];

export const dayInTheLife = [
  {
    time: "07:30 AM",
    phase: "Morning Standup & Floor Walk",
    location: "Starbase Mega Bay 1 / Boca Chica",
    description: "No conference rooms. The team gathers right beside the 50-meter Starship booster ring assembly. Reviewing high-bay weld X-rays, crane lift schedules, and overnight leak test results."
  },
  {
    time: "09:30 AM",
    phase: "CAD Redesign & Step 2 Deletion",
    location: "Engineering Mezzanine overlooking factory",
    description: "Modifying the booster forward dome piping in Siemens NX. Elon asks: 'Can we delete this entire purge valve manifold and vent through the main nozzle?' Redesign takes 3 hours instead of 3 weeks."
  },
  {
    time: "12:30 PM",
    phase: "Rapid Lunch & First Principles Discussion",
    location: "Rocket Garden Cafeteria",
    description: "Debating the thermodynamic efficiency of autogenous tank pressurization vs high-pressure helium COPVs over a quick burrito while watching Starship roll to Pad A."
  },
  {
    time: "02:00 PM",
    phase: "Hardware-In-The-Loop (HITL) Test",
    location: "Avionics Clean Bench",
    description: "Flashing new flight guidance build to 3 redundant flight computers. Simulating max aerodynamic wind shear at Mach 2.5 to see if the TVC actuators saturate."
  },
  {
    time: "04:30 PM",
    phase: "Suborbital Pad Static Fire Test",
    location: "Starbase Mission Control (The Bunker)",
    description: "Engineers sit at telemetry consoles. Polling Go/No-Go for Raptor 3 test fire. Propellant chilldown complete, ignition sequence initiates, 280 tons of thrust shakes the coastal ground."
  },
  {
    time: "07:30 PM",
    phase: "Post-Fire Telemetry Scrub & Tomorrow's Action",
    location: "Data Room",
    description: "Analyzing high-frequency 50kHz vibration sensors from the turbopump housing. Discovering a pressure spike at 80% throttle. Writing a patch before going home so the day shift can test it at 8 AM."
  }
];

export const realInterviewQuestions = [
  {
    id: "q1",
    category: "Propulsion & Rocket Science",
    question: "A rocket has an initial mass of 500,000 kg and dry mass of 50,000 kg. If the specific impulse (Isp) of the engines is 320 seconds, what is the ideal velocity change (Delta-V)?",
    hint: "Use Tsiolkovsky's Rocket Equation: Δv = Isp * g0 * ln(m0 / mf). Standard gravity g0 ≈ 9.81 m/s².",
    formula: "\\Delta v = I_{sp} \\cdot g_0 \\cdot \\ln\\left(\\frac{m_0}{m_f}\\right)",
    steps: [
      "Calculate mass ratio: m0 / mf = 500,000 / 50,000 = 10",
      "Calculate natural log: ln(10) ≈ 2.3026",
      "Effective exhaust velocity ve = Isp * g0 = 320 * 9.80665 ≈ 3138 m/s",
      "Total Delta-v = 3138 * 2.3026 ≈ 7,225 m/s (7.23 km/s)"
    ],
    whySpaceXAsks: "SpaceX engineers constantly calculate mass fractions. Every single kilogram deleted from Starship's dry mass translates directly into a kilogram added to Mars payload."
  },
  {
    id: "q2",
    category: "Structures & Thermodynamics",
    question: "Why did SpaceX switch Starship from lightweight Carbon Fiber Composites to 304L/30X Stainless Steel, even though steel is roughly 4 times heavier per volume?",
    hint: "Consider material performance at cryogenic temperatures (-196°C) and orbital re-entry temperatures (1400°C), plus cost per kilogram and welding speed.",
    formula: "\\text{Specific Strength at } 800^{\\circ}\\text{C: } \\text{Steel} \\gg \\text{Carbon Resin (vaporizes at } 300^{\\circ}\\text{C)}",
    steps: [
      "1. High Temperature Strength: Carbon fiber resin degrades above 200°C. Stainless steel retains strength up to 800°C. This means the re-entry leeward side needs ZERO heat shield tiles, saving more net mass than the raw material difference!",
      "2. Cryogenic Performance: Most metals become brittle at -196°C. 300-series stainless steel actually gains 50% yield strength and toughness when chilled by liquid nitrogen/methane.",
      "3. Cost: Carbon fiber was $130/kg with 35% scrap rate. 304L stainless steel is $4/kg and 100% recyclable.",
      "4. Cycle Time: A steel ring can be rolled and robotically welded outdoors in 4 hours; carbon fiber required massive cleanroom autoclaves."
    ],
    whySpaceXAsks: "Tests whether the applicant relies on dogma ('aerospace = carbon fiber') or First Principles physics and production velocity."
  },
  {
    id: "q3",
    category: "Avionics & Software",
    question: "In a mission-critical triple-redundant flight computer system, why does SpaceX use voting instead of master-worker, and how do they deal with cosmic radiation Single Event Upsets (SEU)?",
    hint: "Think about bit-flips caused by solar protons in high orbit and why radiation-hardened chips are 20 years obsolete.",
    formula: "\\text{Majority Voting: } \\text{Output} = \\text{Median}(C_1, C_2, C_3)",
    steps: [
      "Commercial radiation-hardened chips (like RAD750) run at a meager 133 MHz and cost $200,000.",
      "SpaceX instead uses modern high-speed dual-core commercial x86/ARM processors costing $500 running Linux.",
      "Three independent computers run the identical software concurrently.",
      "Each microsecond, all three read sensors and send output commands. A hardware voting gate compares the 3 streams. If one computer suffers a radiation bit-flip and disagrees, it is outvoted 2-to-1, reset, and re-synced in milliseconds."
    ],
    whySpaceXAsks: "Checks if you know how to build ultra-reliable systems out of cheap, powerful commercial hardware through intelligent architecture."
  }
];

export const vehiclesBlueprintData = {
  starship_fullstack: {
    id: "starship_fullstack",
    name: "Starship Full Stack (Ship + Super Heavy)",
    height: "121 m (397 ft)",
    diameter: "9 m (29.5 ft)",
    totalMass: "5,000,000+ kg (Wet)",
    payloadToLEO: "150 - 250+ metric tons (Fully Reusable)",
    liftoffThrust: "7,590 tf (~74.5 MN / 16.7M lbf)",
    propellant: "Sub-cooled Liquid CH4 (22%) + Liquid O2 (78%)",
    subsystems: [
      {
        id: "hot_staging_ring",
        title: "Hot-Staging Ring (Vented Interstage)",
        category: "Staging & Separation",
        description: "Instead of traditional unpowered coast separation, the Starship upper stage ignites its 6 Raptor engines while still mechanically attached to Super Heavy. The ring features heavy thermal shielding and open vent louvers to channel supersonic flame away without damaging the booster dome.",
        massEffect: "-12% Gravity Loss (~10 tons more payload)",
        firstPrinciplesWhy: "Rocket engines are most efficient under constant acceleration; cutting thrust at MECO costs valuable velocity."
      },
      {
        id: "booster_octoweb",
        title: "Super Heavy 33-Raptor Octoweb",
        category: "Propulsion Cluster",
        description: "Arranged in concentric rings: 20 fixed outer engines with zero gimbal, and 13 center engines with high-speed Thrust Vector Control (TVC) gimbals for ascent steering and hoverslam tower catches.",
        massEffect: "World record sea-level thrust (74.5 MN)",
        firstPrinciplesWhy: "Outer engines don't need heavy hydraulic gimbals or restart hardware, saving tons of dead dry weight."
      },
      {
        id: "hex_heat_shield",
        title: "Hexagonal Ceramic TPS Tiles",
        category: "Thermal Protection System",
        description: "Over 18,000 mechanically mounted hexagonal tiles protect the windward belly during 1,400°C orbital re-entry plasma. The hexagonal shape prevents straight pathways for hypersonic hot gas penetration.",
        massEffect: "Rapid reuse without chemical ablator replacement",
        firstPrinciplesWhy: "Traditional space shuttle tiles were glued with varying custom shapes taking weeks to replace; Starship uses standardized clip geometry."
      },
      {
        id: "flaps_actuators",
        title: "Aerodynamic Body Flaps & Direct-Drive Motors",
        category: "GNC & Atmospheric Control",
        description: "Forward and aft flaps don't provide aerodynamic lift like an airplane; they act like a skydiver's arms and legs, controlling pitch, roll, and angle of attack during the bellyflop descent through the atmosphere.",
        massEffect: "Replaced heavy hydraulics with Tesla Model S Plaid battery & electric motors",
        firstPrinciplesWhy: "Hydraulic oil freezes in deep space and leaks; electric actuators are clean, cold-resistant, and high-torque."
      },
      {
        id: "catch_pins",
        title: "Structural Catch Pins (Mechazilla Interface)",
        category: "Recovery Hardware",
        description: "Two ultra-high-strength forged alloy catch points positioned near the forward grid fins on Super Heavy that bear the full 200+ ton dynamic landing deceleration load when captured by the tower chopsticks.",
        massEffect: "Saved ~15,000 kg by deleting booster landing legs",
        firstPrinciplesWhy: "Leave the landing legs on the pad. The rocket only needs legs on Earth once every flight, so why carry them to space and back?"
      }
    ]
  },
  falcon9: {
    id: "falcon9",
    name: "Falcon 9 Full Thrust (Block 5)",
    height: "70 m (229.6 ft)",
    diameter: "3.7 m (12 ft)",
    totalMass: "549,054 kg",
    payloadToLEO: "22,800 kg (Expendable) / ~17,500 kg (Droneship Recovery)",
    liftoffThrust: "775 tf (7,607 kN / 1.7M lbf)",
    propellant: "RP-1 Rocket Grade Kerosene + Liquid Oxygen",
    subsystems: [
      {
        id: "grid_fins_ti",
        title: "Forged Titanium Hypersonic Grid Fins",
        category: "Aerodynamic Control",
        description: "Carved from single massive forgings of titanium. Unlike the older aluminum fins that required thermal coatings and occasionally caught fire during supersonic atmospheric entry, titanium fins survive extreme hypersonic friction with zero refurb.",
        massEffect: "Unlimited flight reusability with zero maintenance",
        firstPrinciplesWhy: "Aluminum is cheaper upfront, but titanium withstands 1,000°C shock heating without burning."
      },
      {
        id: "landing_legs_cf",
        title: "Carbon Fiber Pneumatic Landing Legs",
        category: "Touchdown System",
        description: "Four deployable A-frame legs made of state-of-the-art carbon fiber and aluminum honeycomb. Deployed by pressurized helium just 5 seconds before touchdown.",
        massEffect: "Less than 2,000 kg for all four legs combined",
        firstPrinciplesWhy: "Pneumatics deployed with gravity assist lock mechanically, eliminating active hydraulic pump weight."
      },
      {
        id: "merlin_octaweb",
        title: "Octaweb Engine Thrust Structure",
        category: "Propulsion Integration",
        description: "Houses 8 Merlin 1D engines in an outer ring and 1 center engine. Provides structural load distribution to the rocket tank walls while shielding adjacent engines from individual uncontained energetic failures.",
        massEffect: "Engine-out capability (can lose 2 engines and still reach orbit)",
        firstPrinciplesWhy: "Octagonal truss efficiently distributes point thrust into continuous tank skin shear."
      }
    ]
  }
};

export const algorithmArenaDilemmas = [
  {
    id: "dilemma_legs",
    title: "Booster Recovery: Landing Legs vs Tower Catch",
    context: "Starship Super Heavy is the largest booster ever built. Conventional landing legs would need to support a 200-ton vehicle slamming down on uneven terrain in high winds.",
    options: [
      {
        id: "traditional_legs",
        name: "Option A: Massive Built-in Hydraulic Landing Legs",
        summary: "Design retractable titanium/steel legs mounted to the base of Super Heavy with shock-absorbing crush cores.",
        metrics: { massPenaltyKg: 15000, costM: 45, cycleDays: 14, catchRisk: "Low initial risk, heavy recurring payload loss" },
        outcome: "FAILURE OF FIRST PRINCIPLES! Carrying 15 metric tons of dead leg mass to hypersonic staging speeds steals 15 tons of payload to orbit on EVERY flight. Rocket turnaround is slow because legs must be inspected, serviced, and folded.",
        isMuskChoice: false
      },
      {
        id: "mechazilla_catch",
        name: "Option B: Delete Legs Entirely, Catch with Tower Chopsticks",
        summary: "Delete landing legs from the rocket. Build giant hydraulic chopstick arms on the launch tower ('Mechazilla') that catch the booster out of mid-air by structural pins.",
        metrics: { massPenaltyKg: 0, costM: 120, cycleDays: 0.5, catchRisk: "High ground tower complexity, zero flight payload penalty" },
        outcome: "FIRST PRINCIPLES TRIUMPH! By transferring the mass penalty from the vehicle to the ground pad, the booster saves 15 tons on every launch. Furthermore, the chopsticks immediately rotate the booster back onto the orbital launch mount for re-flight in hours!",
        isMuskChoice: true
      }
    ]
  },
  {
    id: "dilemma_staging",
    title: "Stage Separation: Traditional Pneumatic vs Hot-Staging",
    context: "At 70 km altitude, Falcon 9 coasts unpowered for 4 seconds while pneumatic pushers shove the second stage away before lighting the vacuum engine. During those 4 seconds, the vehicle decelerates due to gravity.",
    options: [
      {
        id: "cold_pneumatic",
        name: "Option A: Cold Coast Separation (Falcon 9 Method)",
        summary: "Cut booster thrust completely, wait for chamber pressures to drop to zero, deploy pneumatic actuators, separate by 30 meters, then ignite upper stage.",
        metrics: { massPenaltyKg: 2000, costM: 10, cycleDays: 1, catchRisk: "Safe, but loses 10% payload to gravity drag" },
        outcome: "Conventional OldSpace dogma. Clean and safe, but cutting engine thrust at maximum aerodynamic momentum wastes thousands of pounds of fuel fighting Earth's gravity well.",
        isMuskChoice: false
      },
      {
        id: "hot_staging",
        name: "Option B: Hot-Staging with Vented Stainless Steel Ring",
        summary: "Light the 6 upper stage Raptor engines while the booster is still firing 3 center engines! Channel the supersonic exhaust blast out of heavy vented louvers in an interstage ring.",
        metrics: { massPenaltyKg: -8000, costM: 30, cycleDays: 1, catchRisk: "Interstage blast heat risk, but +10% net payload gain" },
        outcome: "MASSIVE PAYLOAD MULTIPLIER! Implemented on Starship IFT-2 onward. By never letting the stack coast, continuous acceleration delivers an extra 10+ metric tons of payload to orbit.",
        isMuskChoice: true
      }
    ]
  },
  {
    id: "dilemma_raptor_plumbing",
    title: "Raptor 3 Engine: External Plumbing vs 3D Printed Channels",
    context: "Raptor 1 and 2 had hundreds of external stainless steel tubes, pressure sensors, bolted flanges, and heat shield blankets to protect sensitive electronics from exhaust radiation.",
    options: [
      {
        id: "shielded_manifolds",
        name: "Option A: Bolted Manifolds with Thermal Blankets",
        summary: "Keep standard external tubing and wrap the engine in high-temperature ceramic fire blankets and stainless heat shields.",
        metrics: { massPenaltyKg: 550, costM: 15, cycleDays: 5, catchRisk: "Sensors burn off, vibration fatigues tube joints" },
        outcome: "Slow manufacturing and prone to leaks. Every bolt and tube fitting is a potential leak path during high-frequency 50 kHz rocket vibrations.",
        isMuskChoice: false
      },
      {
        id: "integrated_castings",
        name: "Option B: Delete Secondary Manifolds, Cast Channels into Engine Body",
        summary: "Delete the heat shield entirely. 3D-print and cast all propellant routing, purge channels, and sensors internally within the structural casing of the engine.",
        metrics: { massPenaltyKg: -350, costM: 5, cycleDays: 0.5, catchRisk: "Clean exterior, zero heat shield needed, 350 bar rated" },
        outcome: "RAPTOR 3 MASTERPIECE! The engine looks like a seamless metallic sculpture. Over 500 kg of brackets, tubes, and blankets were eliminated, simultaneously increasing chamber pressure from 300 to 350 bar.",
        isMuskChoice: true
      }
    ]
  }
];

export const marsMissionArchitecture = {
  overview: "SpaceX's founding charter is to make humanity a multi-planetary species. Because of Earth's gravity well, Starship cannot reach Mars with 100 tons of cargo without Orbital Refilling in Low Earth Orbit (LEO).",
  synodicPeriodMonths: 26, // Earth-Mars alignment every 26 months
  flightSteps: [
    {
      step: 1,
      title: "Starship Cargo / Crew Launch to LEO",
      description: "Starship launches on Super Heavy booster. Booster returns to Starbase Mechazilla for catch. Ship reaches 200 km Low Earth Orbit, but has consumed ~95% of its 1,200 metric tons of propellant.",
      deltaVRequired: "9,300 m/s (from sea level to LEO)"
    },
    {
      step: 2,
      title: "Starship Tanker Fleet Launches (Orbital Refilling)",
      description: "Specialized Tanker Starships launch 8 to 12 times in rapid succession, docking butt-to-butt with the Mars Ship. Liquid methane and liquid oxygen are transferred in microgravity using slight ullage acceleration thrusters.",
      deltaVRequired: "Zero net delta-V (Microgravity cryogenic fluid transfer)"
    },
    {
      step: 3,
      title: "Trans-Mars Injection (TMI) Burn",
      description: "Now fully replenished with 1,200 tons of subcooled propellant in orbit, the 6 Raptor engines fire for over 8 minutes, accelerating Starship out of Earth orbit onto a hyperbolic Mars transfer trajectory at over 11 km/s (Mach 33).",
      deltaVRequired: "3,800 - 4,200 m/s"
    },
    {
      step: 4,
      title: "Deep Space Cruise (120 - 180 Days)",
      description: "Starship coasts through interplanetary space. Solar panels or nuclear/methane fuel cells generate power. Avionics continuously perform star-tracker celestial navigation and trajectory correction maneuvers (TCM).",
      deltaVRequired: "50 - 100 m/s (Corrections)"
    },
    {
      step: 5,
      title: "Martian Atmospheric Aerocapture & Landing",
      description: "Starship slams into Mars's thin 95% CO2 atmosphere at 7.5 km/s. The ceramic heat shield absorbs thousands of degrees of entry heat, bleeding off 99% of energy for FREE through aerodynamic friction. At 1,000 meters altitude, the Raptor engines light, the ship performs the signature flip maneuver, and touches down vertically on Martian bedrock.",
      deltaVRequired: "600 - 800 m/s (Final landing burn only!)"
    }
  ]
};

export const starlinkNetworkData = {
  overview: "Starlink is the world's largest satellite constellation. Thousands of SpaceX software, network, and RF engineers design the phased array antennas, autonomous collision avoidance thrusters, and inter-satellite optical laser links.",
  stats: {
    orbitAltitudeKm: 550,
    activeSatellites: "6,000+",
    laserLinkSpeedGbps: 100,
    speedOfLightInVacuumKmS: 299792,
    speedOfLightInGlassFiberKmS: 204000,
  },
  laserMeshAdvantage: "Light travels ~47% FASTER through vacuum than through terrestrial glass optic fiber cables. A packet sent from London to Tokyo via Starlink's space laser mesh can arrive dozens of milliseconds quicker than under-sea cables!"
};

