import { useEffect, useState } from "react"

export function useSearch()
{
  const [search, setSearch] = useState('')
  
  useEffect(()=>{

  },[search])

  return {search, setSearch}
}