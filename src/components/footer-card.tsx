import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";

const FooterCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <Card className="bg-card shadow-md">
      <CardHeader>
        <CardTitle className="text-primary text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
export default FooterCard;