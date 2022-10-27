import { uuid } from './utils'

export default {
  name: 'workshop',
  columns: [
    {
      name: 'todo',
      tasks: [
        {
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis pretium tellus tempus gravida. Integer nec blandit nunc. Ut id purus enim. Morbi vel blandit quam, vel pharetra libero. Nulla in lacinia enim, id accumsan dui. Phasellus finibus tellus vitae.',
          name: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          id: uuid(),
          userAssigned: null
        },
        {
          description: '',
          name: 'second task',
          id: uuid(),
          userAssigned: null
        },
        {
          description: '',
          name: 'and thrid',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'in-progress',
      tasks: [
        {
          description: '',
          name: 'first task',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'done',
      tasks: [
        {
          description: '',
          name: 'first task',
          id: uuid(),
          userAssigned: null
        }
      ]
    }
  ]
}
