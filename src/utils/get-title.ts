function getTitle(week: number): string {
  if (week === 1 || week === 2) {
    return 'Programming Basics'
  } else if (week === 3 || week === 4) {
    return 'Web Fundamentals'
  } else if (week > 4 && week < 10) {
    return 'C# / .NET'
  }

  return 'Java / Spring'
}

export { getTitle }
