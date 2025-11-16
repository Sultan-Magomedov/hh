import { Button, Card, Flex, Group, Text } from "@mantine/core";
import "@mantine/core/styles.css";
interface MyCardProps {
  name: string;
  area: string;
  exp: string;
  company: string;
  form: string | undefined;
  from: number | null | undefined;
  to: number | null | undefined;
  currency: string | undefined;
  url: string;
}
export const MyCard = (vacancy: MyCardProps) => {
  return (
    <Card padding={24} radius={12} w={659}>
      <Flex justify="space-between" direction="column" gap={16}>
        <Flex justify="space-between" direction="column" align="start" gap={2}>
          <Text color="blue" fz={20} fw={600}>
            {vacancy.name}
          </Text>
          <Group gap={16}>
            {vacancy.from && vacancy.to && (
              <Text>
                {vacancy.from}-{vacancy.to}
                {vacancy.currency}
              </Text>
            )}
            {!vacancy.from && vacancy.to && (
              <Text>
                до {vacancy.to}
                {vacancy.currency}
              </Text>
            )}
            {vacancy.from && !vacancy.to && (
              <Text>
                от {vacancy.from}
                {vacancy.currency}
              </Text>
            )}
            <Text>{vacancy.exp}</Text>
          </Group>
        </Flex>
        <Flex justify="space-between" direction="column" align="start">
          <Text fz={14} mb={5}>
            {vacancy.company}
          </Text>
          {vacancy.form && (
            <Text
              fz={9}
              mb={3}
              color="white"
              bdrs={3}
              pl={6}
              pr={6}
              bg="blue"
              fw={700}
            >
              {vacancy.form}
            </Text>
          )}
          <Text>{vacancy.area}</Text>
        </Flex>
        <Flex gap={12} align="start">
          <Button color="#0F0F10" radius="md">
            Смотреть вакансию
          </Button>
          <Button color="#0F0F10" variant="light" radius="md">
            <a
              style={{ color: "black", textDecoration: "none" }}
              href={vacancy.url}
            >
              Откликнуться
            </a>
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};
