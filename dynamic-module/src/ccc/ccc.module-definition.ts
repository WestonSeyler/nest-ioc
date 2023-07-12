import { ConfigurableModuleBuilder } from '@nestjs/common';

export interface CccModuleOptions {
  aaa: number;
  bbb: string;
}

// export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
//   new ConfigurableModuleBuilder<CccModuleOptions>()
//     // 添加forRoot使用
//     .setClassMethodName('forRoot')
//     .build();

// 如果想使用全局模块的话

export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
  ASYNC_OPTIONS_TYPE,
} = new ConfigurableModuleBuilder<CccModuleOptions>()
  // 添加forRoot使用
  .setClassMethodName('register')
  .setExtras(
    {
      isGlobal: true,
    },
    (definition, extras) => {
      return {
        ...definition,
        global: extras.isGlobal,
      };
    },
  )
  .build();
