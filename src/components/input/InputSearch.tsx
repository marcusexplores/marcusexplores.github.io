import { Input } from "./Input";
import { Search } from "lucide-react";

type InputSearchProps = React.ComponentProps<typeof Input>;

export const InputSearch = ({ ...props }: InputSearchProps) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input className="pl-10" {...props} />
    </div>
  )
}