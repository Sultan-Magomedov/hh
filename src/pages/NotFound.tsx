import { Button, Card, Flex, Text } from "@mantine/core";
import styles from "./NotFound.module.css";
import { useNavigate } from "react-router";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card className={styles.card}>
        <Flex justify="space-between" h={124} mb={32} align="center">
          <Flex align="flex-start" direction="column">
            <Text className={styles.title} fz="h1" fw={700}>
              Упс! Такой страницы не существует
            </Text>
            <Text fz={18} fw={400}>
              Давайте перейдём к началу.
            </Text>
          </Flex>
          <Button className={styles.button} onClick={() => navigate("/")}>
            На главную
          </Button>
        </Flex>
        <div
          className="tenor-gif-embed"
          data-postid="12536795"
          data-share-method="host"
          data-aspect-ratio="1.90476"
          data-width="100%"
        >
          <a href="https://tenor.com/view/sad-cat-lonely-upset-crying-gif-12536795">
            печальный кот плачет грустный GIF
          </a>
          from <a href="https://tenor.com/search/sad-gifs">Sad GIFs</a>
        </div>{" "}
        <script
          type="text/javascript"
          async
          src="https://tenor.com/embed.js"
        ></script>
      </Card>
    </>
  );
};
