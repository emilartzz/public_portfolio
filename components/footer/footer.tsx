const Footer = () => {

   const date = new Date().getFullYear();

   return (
      <footer className="h-40">
         <div className="flex justify-center items-center h-full">
            <p className="text-primary-foreground">© {date} Emil Warelius</p>
         </div>
      </footer>
   );
};

export default Footer;