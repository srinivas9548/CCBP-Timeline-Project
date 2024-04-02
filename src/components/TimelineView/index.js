import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimeLineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="time-line-container">
      <div className="responsive-container">
        <div className="header-container">
          <h1 className="heading">
            MY JOURNEY OF <br />
            <span className="ccbp-heading">CCBP 4.0</span>
          </h1>
        </div>
        <Chrono
          theme={{secondary: 'white'}}
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
        >
          {timelineItemsList.map(eachItem =>
            eachItem.categoryId === 'PROJECT' ? (
              <ProjectTimeLineCard
                key={eachItem.id}
                projectDetails={eachItem}
              />
            ) : (
              <CourseTimelineCard key={eachItem.id} courseDetails={eachItem} />
            ),
          )}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
