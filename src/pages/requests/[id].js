import { useRouter } from "next/router";
import { useRequestById } from "../../features/organize/organizeApi";
import getFirebaseAdmin from "../../app/firebaseAdmin";
import { parseCookies } from "nookies";
import Card from "../../components/Card";
import CardBody from "../../components/CardBody";
import ImageCard from "../../components/Cards/ImageCard";
import Layout from "../../containers/Layout";
import ModuleContainer from "../../containers/ModuleContainer";

export const getServerSideProps = async (ctx) => {
  try {
    const admin = getFirebaseAdmin();
    const cookies = parseCookies(ctx);
    await admin.auth().verifyIdToken(cookies.__session);

    return {
      props: {},
    };
  } catch (err) {
    // either the `__session` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }
};




function Request() {
  const router = useRouter();
  const { id } = router.query;
  const { isLoading,data } = useRequestById(parseInt(id));
  return <>
    {
      isLoading?(
        <div className="text-white">
          Loading
        </div>
      ):(
        <>
          <Card>
            <CardBody className="flex flex-col">
              {data.media &&
                data.media.map((url, index) => (
                  <ImageCard key={index} index={index} media={url} />
                ))
              }
              <div className="flex flex-col m-2">
                <p className="text-md text-gray-700 dark:text-gray-200">
                  {data.description}
                </p>
                <br/>
                <a className="hover:cursor-pointer hover:bg-blue-600 py-4 px-8 w-fit border-blue-600 border-solid border-2 rounded-md" href={data.referenceLink}>View Reference</a>
              </div>
            </CardBody>
          </Card>
        </>
      )
    }
  
  </>;
}

export default Request;

Request.getLayout = function getLayout(page){
  return(
    <Layout>
      <ModuleContainer moduleName={"request"} moduleColor={"blue"}>
        {page}
      </ModuleContainer>
    </Layout>
  );
};