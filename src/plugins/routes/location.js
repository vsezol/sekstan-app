import Location from '../../pages/Location'
import Archive from '../../pages/location/Archive'
import NewPoint from '../../pages/location/NewPoint'
import CheckPlanets from '../../pages/location/CheckPlanets'
import CheckedList from '../../pages/location/CheckedList'
import Measurements from '../../pages/location/checked-list/Measurements'

export default [
  { path: '/location/archive', component: Archive },
  { path: '/location/new-point', component: NewPoint },
  { path: '/location/check-planets', component: CheckPlanets },
  { path: '/location/checked-list/:name', component: Measurements },
  { path: '/location/checked-list', component: CheckedList },
  { path: '/location', component: Location }
]
