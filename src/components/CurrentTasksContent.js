import { ClockIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import {ChatBubbleOvalLeftEllipsisIcon, CommandLineIcon, ChatBubbleBottomCenterTextIcon} from '@heroicons/react/24/outline'
import React from 'react'

const CurrentTasksContent = ({taskTitle , iconName, statusColor, statusText, timeTaken, iconColor}) => {
  let IconComponent;

    switch (iconName) {
  
    case 'CommandLineIcon':
      IconComponent = CommandLineIcon;
      break;
    case 'ChatBubbleOvalLeftEllipsisIcon':
      IconComponent = ChatBubbleOvalLeftEllipsisIcon;
      break;
    case 'ChatBubbleBottomCenterTextIcon':
      IconComponent = ChatBubbleBottomCenterTextIcon;
      break;

    default:

      IconComponent = null;
      break;
  }
  
  return (
    <div>
        <div className="grid grid-cols-12 justify-between font-semibold">

<div className="flex items-center col-span-5">
  {IconComponent && <IconComponent className={`h-12 w-12 p-3 bg-${iconColor}-200 rounded-full`} />}

  <h1 className="ml-2 ">{taskTitle}</h1>
</div>
<div className="flex items-center ml-2 col-span-3">
  <p className={`text-${statusColor}-400 text-2xl mb-1`}>&#x2022;</p>
  <p className="ml-1">{statusText}</p>
</div>
<div className="flex items-center ml-2 col-span-2">
  <ClockIcon className="h-6 w-6 text-gray-400" />
  <h1 className="ml-1">{timeTaken}h</h1>
</div>
<div className="ml-2 mt-2 col-span-2">

  <EllipsisHorizontalIcon className="h-6 w-6 " />
</div>

</div>
    </div>
  )
}

export default CurrentTasksContent