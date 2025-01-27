import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Benchmark } from "./types/benchmark";
import { Filters } from "./types/filters";

export function BenchmarkTable({
  benchmarks,
  filters
}: {
  benchmarks: Benchmark[] | undefined;
  filters: Filters | undefined;
}) {

    const tableData = benchmarks?.map((benchmark) => ({
        name: benchmark.name,
        minimum: filters ? benchmark.metrics[filters.metrics].minimum : 0,
        median: filters ? benchmark.metrics[filters.metrics].median : 0,
        maximum: filters ? benchmark.metrics[filters.metrics].maximum : 0,
      })) || []
    

  return (<Table>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Name</TableHead>
        <TableHead>Minimum</TableHead>
        <TableHead>Median</TableHead>
        <TableHead className="text-right">Maximum</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      
      {tableData.map((item) => (
        <TableRow>
         <TableCell className="font-medium">{item.name}</TableCell>
         <TableCell>{item.minimum}</TableCell>
         <TableCell>{item.median}</TableCell>
         <TableCell className="text-right">{item.maximum}</TableCell>
         </TableRow>
      ))}
      
    </TableBody>
  </Table>);
}
