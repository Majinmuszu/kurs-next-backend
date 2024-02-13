import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 12, end: 17 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "product", loc: { start: 22, end: 29 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "id", loc: { start: 30, end: 32 } },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 34, end: 36 },
                  },
                  loc: { start: 34, end: 36 },
                },
                loc: { start: 34, end: 37 },
              },
              directives: [],
              loc: { start: 30, end: 37 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 40, end: 47 },
            },
            loc: { start: 40, end: 47 },
          },
          directives: [],
          loc: { start: 22, end: 47 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "productsList",
            loc: { start: 50, end: 62 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 65, end: 72 },
              },
              loc: { start: 65, end: 72 },
            },
            loc: { start: 64, end: 73 },
          },
          directives: [],
          loc: { start: 50, end: 73 },
        },
      ],
      loc: { start: 0, end: 75 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 82, end: 89 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 94, end: 96 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ID", loc: { start: 98, end: 100 } },
              loc: { start: 98, end: 100 },
            },
            loc: { start: 98, end: 101 },
          },
          directives: [],
          loc: { start: 94, end: 101 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 104, end: 108 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 110, end: 116 },
              },
              loc: { start: 110, end: 116 },
            },
            loc: { start: 110, end: 117 },
          },
          directives: [],
          loc: { start: 104, end: 117 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 120, end: 124 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 126, end: 132 },
              },
              loc: { start: 126, end: 132 },
            },
            loc: { start: 126, end: 133 },
          },
          directives: [],
          loc: { start: 120, end: 133 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 136, end: 147 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 149, end: 155 },
              },
              loc: { start: 149, end: 155 },
            },
            loc: { start: 149, end: 156 },
          },
          directives: [],
          loc: { start: 136, end: 156 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "price", loc: { start: 159, end: 164 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 166, end: 169 },
              },
              loc: { start: 166, end: 169 },
            },
            loc: { start: 166, end: 170 },
          },
          directives: [],
          loc: { start: 159, end: 170 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "image", loc: { start: 173, end: 178 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 180, end: 186 },
              },
              loc: { start: 180, end: 186 },
            },
            loc: { start: 180, end: 187 },
          },
          directives: [],
          loc: { start: 173, end: 187 },
        },
      ],
      loc: { start: 77, end: 189 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 195, end: 200 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 190, end: 200 },
    },
  ],
  loc: { start: 0, end: 201 },
} as unknown as DocumentNode;
