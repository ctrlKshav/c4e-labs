import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  description: string;
  status: string;
  links: { label: string; href: string }[];
}

export function ProductCard({
  title,
  description,
  status,
  links,
}: ProductCardProps) {
  return (
    <Card className="p-6 bg-background">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
        <Badge variant="outline">{status}</Badge>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="flex mt-4 space-x-3">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" variant={index === 0 ? "default" : "outline"}>
              {link.label}
            </Button>
          </a>
        ))}
      </div>
    </Card>
  );
}
