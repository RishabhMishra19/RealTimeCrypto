import { useForm, Controller } from "react-hook-form";
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Switch,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { useMutation, useQuery } from "react-query";
import { fetSetupQueryKey } from "../utils/setup-utils/setup-data.queryKeys";
import {
  fetchSetup,
  updateSetupData,
} from "../utils/setup-utils/setup-data.service";
import { ISetup } from "../utils/setup-utils/setup-data.types";
import { MultiSelect, Option } from "chakra-multiselect";
import {
  CryptoCurrencyOptions,
  TrackedCryptoCodeOptions,
} from "../utils/constants";
import { useCToast } from "../hooks/useCToast";

export const SetupForm = () => {
  const toast = useCToast();
  const updateSetupMutation = useMutation(updateSetupData);
  const { handleSubmit, control, reset } = useForm<ISetup>();

  const { isLoading: isLoadingSetup } = useQuery(
    [fetSetupQueryKey],
    fetchSetup,
    {
      onSuccess(response) {
        reset(
          response.data ?? {
            pollingEnabled: false,
            pollingIntervalInSec: 10,
            trackedCryptoCodes: [],
            currency: "USD",
          }
        );
      },
    }
  );

  const onSubmit = (data: ISetup) => {
    updateSetupMutation.mutate(data, {
      onSuccess() {
        toast({ title: "Successfully Updated!" });
      },
    });
  };

  return (
    <Box maxWidth="300px" mx="auto">
      <Text
        fontSize="md"
        fontWeight="bold"
        mb="10px"
        style={{ padding: "10px", borderRadius: "6px", background: "#1e1a2c" }}
      >
        Setup
      </Text>
      {isLoadingSetup ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl display="flex" alignItems="center" mb="4">
            <FormLabel htmlFor="pollingEnabled" mb="0">
              Polling Enabled
            </FormLabel>
            <Controller
              name="pollingEnabled"
              control={control}
              render={({ field }) => (
                <Switch
                  isChecked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
              )}
            />
          </FormControl>

          <FormControl mb="4">
            <FormLabel htmlFor="pollingIntervalInSec">
              Polling Interval (in seconds)
            </FormLabel>
            <Controller
              name="pollingIntervalInSec"
              control={control}
              render={({ field }) => (
                <Input type="number" id="pollingIntervalInSec" {...field} />
              )}
            />
          </FormControl>

          <FormControl mb="4">
            <FormLabel>Tracked Crypto Codes</FormLabel>
            <Controller
              name="trackedCryptoCodes"
              control={control}
              render={({ field }) => {
                return (
                  <MultiSelect
                    {...field}
                    options={TrackedCryptoCodeOptions}
                    placeholder="Select tracked crypto codes"
                    value={TrackedCryptoCodeOptions.filter((option) =>
                      field.value.includes(option.value)
                    )}
                    onChange={(selectedOptions) => {
                      const selectedValues = (selectedOptions as Option[]).map(
                        (option) => option.value
                      );
                      field.onChange(selectedValues);
                    }}
                  />
                );
              }}
            />
          </FormControl>

          <FormControl mb="4">
            <FormLabel>Currency</FormLabel>
            <Controller
              name="currency"
              control={control}
              render={({ field }) => {
                return (
                  <MultiSelect
                    {...field}
                    options={CryptoCurrencyOptions}
                    placeholder="Select currency"
                    single
                    onChange={(selectedOptions) => {
                      field.onChange(selectedOptions);
                    }}
                  />
                );
              }}
            />
          </FormControl>

          <Button
            mt={4}
            colorScheme="teal"
            type="submit"
            isLoading={updateSetupMutation.isLoading}
          >
            Update
          </Button>
        </form>
      )}
    </Box>
  );
};
