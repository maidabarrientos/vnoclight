import { markdown, skillMarkdown } from "@/lib/v7";

export function GET() {
  return markdown(skillMarkdown());
}
