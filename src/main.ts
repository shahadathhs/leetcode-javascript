import { checkIfInstanceOf } from '@/app/2618-check-if-object-instance-of-class'

function main() {
  console.log('Hello, World!')
  const dateInstance = new Date()
  console.log(checkIfInstanceOf(dateInstance, Date)) // true
}

main()
