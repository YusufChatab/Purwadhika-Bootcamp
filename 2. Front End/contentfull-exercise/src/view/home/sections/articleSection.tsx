import { client } from "@/utils/contentful";
import { TypeBlogFields } from "@/types/contentful";
import RichText from "../components/richText";
import Image from "next/image";

export async function fetchArticle() {
  try {
    const data = await client.getEntries<TypeBlogFields>();
    console.log(data.items, "article");

    return data?.items;
  } catch (error) {
    console.log(error);
  }
}
export default async function ArticleSection() {
  const articles = await fetchArticle();
  return (
    <>
      <div>
        <div>
          {articles?.map((article) => (
            <div key={article.sys.id}>
              <Image
                alt="image"
                src={`https:${article.fields.articleImage.fields.file.url}`}
                width={720}
                height={720}
              />
              <p>{article.fields.createdAt}</p>
              <p className="text-3xl mb-5">{article.fields.title}</p>
              <p className="text-2xl">{article.fields.summary}</p>
              <RichText document={article.fields.details} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
