CREATE TABLE public.users (
    "_id" serial NOT NULL,
    "device_id" varchar NOT NULL,
    "name" varchar,
    "password" varchar,
    CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
    OIDS=FALSE
); 

CREATE TABLE public.categories (
    "_id" serial NOT NULL,
    "name" varchar NOT NULL,
    "user_id" integer NOT NULL,
    CONSTRAINT "categories_pk" PRIMARY KEY ("_id")
) WITH (
    OIDS=FALSE
);

CREATE TABLE public.items (
    "_id" serial NOT NULL,
    "category_id" integer NOT NULL,
    "quantity" integer NOT NULL,
    "name" varchar NOT NULL,
    "brand" varchar,
    "notes" varchar,
    "description" varchar,
    "image" varchar,
    CONSTRAINT "items_pk" PRIMARY KEY ("_id")
) WITH (
    OIDS=FALSE
);

ALTER TABLE public.categories ADD CONSTRAINT "categories_pk" FOREIGN KEY ("user_id") REFERENCES public.users("_id");

ALTER TABLE public.items ADD CONSTRAINT "items_pk" FOREIGN KEY ("category_id") REFERENCES public.categories("_id");
